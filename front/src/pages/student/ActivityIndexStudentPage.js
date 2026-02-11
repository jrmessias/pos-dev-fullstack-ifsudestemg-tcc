import React, {useEffect, useState} from 'react';
import {studentActivities} from '@/services/activityService.js';
import {ActivityTabs} from '@/components/activity/ActivityTabs';
import {ActivityList} from '@/components/activity/ActivityList';
import Icon from "@/components/Icon.js";

export default function ActivityIndexStudentPage() {
    const [status, setStatus] = useState('pending');
    const [page, setPage] = useState(1);
    const [items, setItems] = useState([]);
    const [meta, setMeta] = useState({pendingCount: 0, completedCount: 0, total: 0});

    useEffect(() => {
        let mounted = true;
        setItems(null);
        studentActivities({status, page, pageSize: 9})
            .then((res) => {
                if (!mounted) return;
                const body = res?.data || {};
                const metaBody = body.meta || {};
                setItems(body.data || []);
                setMeta({
                    pendingCount: metaBody.pendingCount ?? 0,
                    completedCount: metaBody.completedCount ?? 0,
                    total: metaBody.total ?? 0
                });
            })
            .catch((err) => {
                if (!mounted) return;
                // console.error('Erro ao buscar atividades do aluno', err?.response || err);
                setItems([]);
                setMeta({pendingCount: 0, completedCount: 0, total: 0});
            });

        return () => {
            mounted = false
        };
    }, [status, page]);

    return <>
        <div><h1 className="text-2xl font-bold">Minhas Atividades</h1><p
            className="text-muted-foreground">Visualize e envie suas atividades</p></div>
        <div className="grid gap-4 sm:grid-cols-3">
            <div data-slot="card"
                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <div data-slot="card-content" className="px-6 pt-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-warning/10">
                            <Icon name="Clock" className={`w-6 h-6 text-warning`}/>
                        </div>
                        <div><p className="text-sm text-muted-foreground">Pendentes</p><p
                            className="text-2xl font-bold">{meta ? meta.pendingCount : '...'}</p></div>
                    </div>
                </div>
            </div>
            <div data-slot="card"
                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <div data-slot="card-content" className="px-6 pt-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-success/10">
                            <Icon name="CircleCheckBig" className={`w-6 h-6 text-success`}/>
                        </div>
                        <div><p className="text-sm text-muted-foreground">Concluídas</p><p
                            className="text-2xl font-bold">{meta ? meta.completedCount : '...'}</p></div>
                    </div>
                </div>
            </div>
            <div data-slot="card"
                 className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
                <div data-slot="card-content" className="px-6 pt-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/10">
                            <Icon name="FileText" className={`w-6 h-6 text-primary`}/>
                        </div>
                        <div><p className="text-sm text-muted-foreground">Total</p><p
                            className="text-2xl font-bold">{meta ? meta.total : '...'}</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <ActivityTabs counts={{pending: meta.pendingCount, completed: meta.completedCount, total: meta.total}}
                          value={status} onChange={(v) => {
                setStatus(v);
                setPage(1);
            }}>
                <ActivityList items={items}/>
            </ActivityTabs>
        </div>
    </>
}
