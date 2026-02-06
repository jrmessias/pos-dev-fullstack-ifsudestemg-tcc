import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "@/contexts/AuthContext.js";
import {disciplineIndex} from "@/services/disciplineService.js";
import Icon from "@/components/Icon.js";
import {Loading} from "@/components/Loading.js";
import {DataTable} from "@/components/Datatable.js";
import {Badge} from "@/components/ui/badge.jsx";
import {Button} from "@/components/ui/button.jsx";
import { Modal, ConfirmModal } from "@/components/ui/modal.jsx";

export default function DisciplineIndexTeacherPage() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selectedDiscipline, setSelectedDiscipline] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    const getData = async () => {
        const disciplineResponse = await disciplineIndex()
        setData(disciplineResponse.data)
        setLoading(false);
    }

    const openDeleteModal = (item) => {
        setSelectedDiscipline(item);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = async () => {
        if (selectedDiscipline) {
            // deleteDiscipline(selectedDiscipline.id);
            setIsDeleteModalOpen(false);
            await getData();
            setSelectedDiscipline(null);
        }
    };

    const columns = [
        {
            header: "Disciplina",
            key: "name",
            sortable: true,
            render: (item) => (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="BookOpen" className="w-4 h-4 text-primary"/>
                    </div>
                    <span className="font-medium ml-1">{item.name}</span>
                </div>
            )
        },
        {
            header: "Chave",
            key: "key",
            sortable: false,
            render: (item) => (
                <Badge variant={"secondary"}>
                    {item.key}
                </Badge>
            ),
        },
        {
            header: "Status",
            key: "active",
            sortable: true,
            render: (item) => (
                <Badge variant={item.active === 1 ? "default" : "destructive"}>
                    {item.active === 1 ? "Ativo" : "Inativo"}
                </Badge>
            ),
        },
        {
            header: "Ações",
            key: "actions",
            render: (item) => (
                <div className="flex items-center gap-1">
                    {/*<Button*/}
                    {/*    className={'cursor-pointer'}*/}
                    {/*    variant="ghost"*/}
                    {/*    size="icon"*/}
                    {/*    onClick={(event) => {*/}
                    {/*        // e.stopPropagation();*/}
                    {/*        // openViewModal(disciplina);*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <Icon name="Eye" className="w-4 h-4" />*/}
                    {/*</Button>*/}
                    <Button
                        className={'cursor-pointer'}
                        variant="ghost"
                        size="icon"
                        onClick={(event) => {
                            // e.stopPropagation();
                            // openEditModal(disciplina);
                        }}
                    >
                        <Icon name="Users" className="w-4 h-4" />
                    </Button>
                    <Button
                        className={'cursor-pointer'}
                        variant="ghost"
                        size="icon"
                        onClick={(event) => {
                            // e.stopPropagation();
                            // openEditModal(disciplina);
                        }}
                    >
                        <Icon name="Edit" className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive cursor-pointer"
                        onClick={(event) => {
                            event.stopPropagation();
                            openDeleteModal(item);
                        }}
                    >
                        <Icon name="Trash2" className="w-4 h-4" />
                    </Button>
                </div>
            ),
        },
    ];

    useEffect(() => {
        getData()
    }, [])

    return <>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div><h1 className="text-2xl font-bold">Disciplinas</h1><p
                        className="text-muted-foreground">Gerencie suas disciplinas e conteúdos</p></div>
                    <button data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3">
                        <Icon name="Plus" className="w-4 h-4 mr-2"/>
                        Nova Disciplina
                    </button>
                </div>
                <div data-slot="card"
                     className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                    <div data-slot="card-content" className="px-6 pt-6">
                        {!loading && <DataTable data={data}
                                                columns={columns}
                                                searchKey="name" // Define que a busca filtrará pelo campo 'name'
                                                searchPlaceholder="Buscar por disciplina..."
                                                pageSize={5}
                                                onRowClick={(row) => console.log("Linha clicada:", row)}/>}
                        {loading && !data && <Loading/>}
                    </div>
                </div>
           <ConfirmModal
            open={isDeleteModalOpen}
            onOpenChange={setIsDeleteModalOpen}
            title="Excluir Disciplina"
            description={`Tem certeza que deseja excluir a disciplina "${selectedDiscipline?.name}"? Esta ação não pode ser desfeita.`}
            onConfirm={handleDelete}
            confirmText="Excluir"
            variant="destructive"
        />
        {/*<Modal*/}
        {/*    open={isModalOpen}*/}
        {/*    onOpenChange={setIsModalOpen}*/}
        {/*    title={isEditing ? "Editar Disciplina" : "Nova Disciplina"}*/}
        {/*    description={*/}
        {/*        isEditing*/}
        {/*            ? "Atualize as informações da disciplina"*/}
        {/*            : "Preencha os dados para criar uma nova disciplina"*/}
        {/*    }*/}
        {/*    footer={*/}
        {/*        <div className="flex gap-2">*/}
        {/*            <Button variant="outline" onClick={() => setIsModalOpen(false)}>*/}
        {/*                Cancelar*/}
        {/*            </Button>*/}
        {/*            <Button onClick={handleSubmit(onSubmit)}>*/}
        {/*                {isEditing ? "Salvar" : "Criar"}*/}
        {/*            </Button>*/}
        {/*        </div>*/}
        {/*    }*/}
        {/*>*/}
        {/*    <form className="space-y-4">*/}
        {/*        <div className="space-y-2">*/}
        {/*            <Label htmlFor="name">Nome da Disciplina</Label>*/}
        {/*            <Input*/}
        {/*                id="name"*/}
        {/*                placeholder="Ex: Matemática"*/}
        {/*                {...register("name")}*/}
        {/*            />*/}
        {/*            {errors.name && (*/}
        {/*                <p className="text-sm text-destructive">{errors.name.message}</p>*/}
        {/*            )}*/}
        {/*        </div>*/}
        {/*        <div className="space-y-2">*/}
        {/*            <Label htmlFor="description">Descrição</Label>*/}
        {/*            <Textarea*/}
        {/*                id="description"*/}
        {/*                placeholder="Descreva a disciplina..."*/}
        {/*                {...register("description")}*/}
        {/*            />*/}
        {/*            {errors.description && (*/}
        {/*                <p className="text-sm text-destructive">*/}
        {/*                    {errors.description.message}*/}
        {/*                </p>*/}
        {/*            )}*/}
        {/*        </div>*/}
        {/*    </form>*/}
        {/*</Modal>*/}
    </>
}
