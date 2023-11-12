export const TASK_TYPES = [ 
    {title:'Regular', type: 'regular', priority: 0},
    {title:'Important', type: 'important', priority: 1},
]

export const NAV_OPTIONS = [
    { title:'All', type: 'all' },
    ...TASK_TYPES,
    { title: 'Done', type: 'done' }
]