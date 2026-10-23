import ZapIcon from '@lucide/svelte/icons/zap';
import LayersIcon from '@lucide/svelte/icons/layers';
import DatabaseIcon from '@lucide/svelte/icons/database';
import ShieldCheckIcon from '@lucide/svelte/icons/shield-check';

export const databaseExpertise = [
	{
		icon: ZapIcon,
		title: 'Queries Performáticas',
		description: 'EXPLAIN ANALYZE, eliminação de N+1 e reescrita de subqueries como JOINs.',
	},
	{
		icon: LayersIcon,
		title: 'Indexação Avançada',
		description: 'Índices compostos, parciais e GIN/GiST para full-text e dados geoespaciais.',
	},
	{
		icon: DatabaseIcon,
		title: 'Modelagem de Dados',
		description: 'Schema multi-tenant com Row Level Security, soft deletes e particionamento.',
	},
	{
		icon: ShieldCheckIcon,
		title: 'Confiabilidade & Backup',
		description: 'Replicação, backup automatizado, migrações seguras e monitoramento contínuo.',
	},
];
