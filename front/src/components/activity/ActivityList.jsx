import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from '@/components/ui/empty';

export function ActivityList({ items }) {
    if (!items || items.length === 0) return (
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
                    <CardContent />
                    <CardFooter className="justify-between">
                        <div className="text-sm text-muted-foreground">{item.status}</div>
                        <Button size="sm">Abrir</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
