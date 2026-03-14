import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {Skeleton} from '@/components/ui/skeleton';
import {Empty, EmptyDescription, EmptyHeader, EmptyTitle} from '@/components/ui/empty';
import {useNavigate} from 'react-router-dom';
import {Star} from 'lucide-react';
import Icon from "@/components/Icon.js";

export function ActivityList({items}) {
    const navigate = useNavigate();

    if (items === null) {
        return (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                    <Card key={i}>
                        <CardHeader>
                            <Skeleton className="h-5 w-3/4"/>
                            <Skeleton className="h-4 w-1/2"/>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-4 w-24"/>
                        </CardContent>
                        <CardFooter className="justify-between">
                            <Skeleton className="h-4 w-16"/>
                            <Skeleton className="h-8 w-20"/>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        );
    }

    if (items.length === 0) return (
        <Empty>
            <EmptyHeader>
                <EmptyTitle>Sem atividades</EmptyTitle>
                <EmptyDescription>Você não possui atividades no momento.</EmptyDescription>
            </EmptyHeader>
        </Empty>
    );

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <Card key={item.id}>
                    <CardHeader>
                        <CardTitle>{item.name}</CardTitle>
                        <div className="text-sm text-muted-foreground">{item.discipline?.name}</div>
                    </CardHeader>
                    <CardContent>
                        {item.status === 'completed' ? (
                            <div className="flex items-center gap-1.5 text-sm font-semibold text-accent dark:text-accent">
                                <Icon name={'Check'} className="h-4 w-4 "/>
                                {item.xp.toLocaleString('pt-BR')} XP
                            </div>
                        ) : (
                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground text-red-500 dark:text-red-400">
                                <Icon name={'Hourglass'} className="h-4 w-4"/> XP
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="justify-between">
                        {item.status === 'completed' &&
                            <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                                Concluído
                            </Badge>}
                        {item.status === 'pending' &&
                            <Badge className="bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
                                Pendente
                            </Badge>}
                        <Button
                            className={"cursor-pointer"}
                            size="sm"
                            variant={item.status === 'completed' ? 'outline' : 'default'}
                            onClick={() => navigate(`/student/activity/${item.id}/play`)}
                        >
                            {item.status === 'completed' ? 'Ver' : 'Abrir'}
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
