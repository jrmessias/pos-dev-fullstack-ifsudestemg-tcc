import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export function ActivityTabs({ counts, children, value, onChange }) {
    return (
        <Tabs defaultValue={value} value={value} onValueChange={onChange}>
            <TabsList>
                <TabsTrigger value="pending">Pendentes <Badge className="ml-2" variant="secondary">{counts.pending}</Badge></TabsTrigger>
                <TabsTrigger value="completed">Concluídas <Badge className="ml-2" variant="secondary">{counts.completed}</Badge></TabsTrigger>
                <TabsTrigger value="all">Todas <Badge className="ml-2" variant="outline">{counts.total}</Badge></TabsTrigger>
            </TabsList>
            <div className="mt-4">{children}</div>
        </Tabs>
    );
}
