import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { DataTable } from '@/components/Datatable.js';
import { Button } from '@/components/ui/button.jsx';
import { ConfirmModal } from '@/components/ui/modal.jsx';
import { Toaster } from '@/components/ui/sonner.jsx';
import { Loading } from '@/components/Loading.js';
import Icon from '@/components/Icon.js';
import { 
    disciplineStudents, 
    disciplineRemoveStudent,
} from '@/services/disciplineService.js';

export default function DisciplineStudentsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [studentToRemove, setStudentToRemove] = useState(null);
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
    const [removing, setRemoving] = useState(false);
    const [disciplineName, setDisciplineName] = useState("");

    const getStudents = async () => {
        try {
            setLoading(true);
            const response = await disciplineStudents(id);
            setStudents(response.data || []);
        } catch (error) {
            toast.error('Não foi possível carregar a lista de alunos', { position: 'top-center' });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getStudents();
    }, [id]);

    // Abrir modal de confirmação de remoção
    const openRemoveModal = (student) => {
        setStudentToRemove(student);
        setIsRemoveModalOpen(true);
    };

    // Executar remoção do aluno
    const handleRemoveStudent = async () => {
        if (studentToRemove) {
            try {
                setRemoving(true);
                await disciplineRemoveStudent(id, studentToRemove.id);
                
                // Atualizar a lista após remoção
                await getStudents();
                toast.success('Aluno removido com sucesso', { position: 'top-center' });
            } catch (error) {
                toast.error('Não foi possível remover o aluno', { position: 'top-center' });
            } finally {
                setRemoving(false);
                setIsRemoveModalOpen(false);
                setStudentToRemove(null);
            }
        }
    };

    // Definição das colunas da tabela
    const columns = [
        {
            header: 'Nome',
            key: 'name',
            sortable: true,
            render: (item) => (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="User" className="w-4 h-4 text-primary"/>
                    </div>
                    <span>{item.name}</span>
                </div>
            )
        },
        {
            header: 'E-mail',
            key: 'email',
            sortable: true,
        },
        {
            header: 'Data de Inscrição',
            key: 'enrolled_at',
            sortable: true,
            render: (item) => (
                <span>{new Date(item.enrolled_at).toLocaleDateString('pt-BR')}</span>
            )
        },
        {
            header: 'Ações',
            key: 'actions',
            render: (item) => (
                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive cursor-pointer"
                        onClick={(event) => {
                            event.stopPropagation();
                            openRemoveModal(item);
                        }}
                    >
                        <Icon name="UserMinus" className="w-4 h-4"/>
                    </Button>
                </div>
            ),
        }
    ];

    return (
        <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost" 
                            size="icon" 
                            onClick={() => navigate('/teacher/discipline')}
                            className="cursor-pointer mr-2"
                        >
                            <Icon name="ChevronLeft" className="h-4 w-4" />
                        </Button>
                        <h1 className="text-2xl font-bold">
                            Alunos da Disciplina
                        </h1>
                    </div>
                    <p className="text-muted-foreground mt-1">
                        Gerenciando alunos da disciplina
                    </p>
                </div>
            </div>
            
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-sm">
                {loading ? (
                    <Loading />
                ) : (
                    <DataTable
                        data={students}
                        columns={columns}
                        searchKey="name"
                        searchPlaceholder="Buscar por nome..."
                        pageSize={10}
                        isLoading={loading}
                    />
                )}
            </div>
            
            <ConfirmModal
                open={isRemoveModalOpen}
                onOpenChange={(open) => {
                    setIsRemoveModalOpen(open);
                    if (!open && !removing) {
                        setStudentToRemove(null);
                    }
                }}
                title="Remover Aluno"
                description={`Tem certeza que deseja remover o aluno "${studentToRemove?.name}" da disciplina? Esta ação não pode ser desfeita.`}
                onConfirm={handleRemoveStudent}
                isLoading={removing}
                confirmText="Remover"
                variant="destructive"
            />
            
            <Toaster richColors />
        </>
    );
}
