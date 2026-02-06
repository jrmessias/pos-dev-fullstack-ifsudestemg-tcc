import {useEffect, useState} from "react";
import {activityIndex} from "@/services/activityService.js";
import Icon from "@/components/Icon.js";
import {Badge} from "@/components/ui/badge.jsx";
import {Button} from "@/components/ui/button.jsx";
import {DataTable} from "@/components/Datatable.js";
import {Loading} from "@/components/Loading.js";

export default function ActivityIndexTeacherPage (){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const columns = [
        {
            header: "Atividade",
            key: "name",
            sortable: true,
            render: (item) => (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="FileText" className="w-4 h-4 text-primary"/>
                    </div>
                    <span className="font-medium ml-1">{item.name}</span>
                </div>
            )
        },
        {
            header: "Disciplina",
            key: "discipline",
            sortable: false,
            render: (item) => (
                <div className="flex items-center gap-2">
                    <span className="font-medium ml-1">{item.Discipline.name}</span>
                </div>
            )
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
                    <Button
                        className={'cursor-pointer'}
                        variant="ghost"
                        size="icon"
                        onClick={(event) => {
                            // e.stopPropagation();
                            // openEditModal(disciplina);
                        }}
                    >
                        <Icon name="ClipboardCheck" className="w-4 h-4" />
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
                            // e.stopPropagation();
                            // openDeleteModal(disciplina);
                        }}
                    >
                        <Icon name="Trash2" className="w-4 h-4" />
                    </Button>
                </div>
            ),
        },
    ];

    useEffect(() => {
        const getData = async () => {
            const activityResponse = await activityIndex()
            setData(activityResponse.data)
            setLoading(false);
        }
        getData()
    }, [])

    return <>
        <div className="p-6">
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div><h1 className="text-2xl font-bold">Atividades</h1><p className="text-muted-foreground">Gerencie
                        atividades, quizzes e provas</p></div>
                    <button data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-plus w-4 h-4 mr-2">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                        Nova Atividade
                    </button>
                </div>
                <div data-slot="card"
                     className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                    <div data-slot="card-content" className="px-6 pt-6">
                        {!loading && <DataTable data={data}
                                                columns={columns}
                                                searchKey="name" // Define que a busca filtrará pelo campo 'name'
                                                searchPlaceholder="Buscar por atividade..."
                                                pageSize={5}
                                                onRowClick={(row) => console.log("Linha clicada:", row)}/>}
                        {loading && !data && <Loading/>}
                    </div>
                </div>
            </div>
        </div>
    </>
}
