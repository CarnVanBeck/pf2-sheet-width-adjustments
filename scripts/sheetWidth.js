const SHEETWIDTH_MODULENAME = 'pf2-sheet-width-adjustments';
const SHEETWIDTH_PCSETTINGS = 'pc-width';
const SHEETWIDTH_NPCSETTINGS = 'npc-width';
const SHEETWIDTH_JOURNALSETTINGS = 'journal-width';

Hooks.on('init', () => {
    console.log(`${SHEETWIDTH_MODULENAME} | Hook on init`);
    
    game.settings.register(SHEETWIDTH_MODULENAME, SHEETWIDTH_PCSETTINGS, {
        name: game.i18n.localize('PF2ESheetWidth.settings.PCWidth'),
        scope: 'world',
        config: true,
        type: String,
        default: '650px'
    });
    game.settings.register(SHEETWIDTH_MODULENAME, SHEETWIDTH_NPCSETTINGS, {
        name: game.i18n.localize('PF2ESheetWidth.settings.NPCWidth'),
        scope: 'client',
        config: true,
        type: String,
        default: '650px'
    });
    game.settings.register(SHEETWIDTH_MODULENAME, SHEETWIDTH_JOURNALSETTINGS, {
        name: game.i18n.localize('PF2ESheetWidth.settings.JournalWidth'),
        scope: 'client',
        config: true,
        type: String,
        default: '720px'
    });
});

Hooks.on('renderJournalSheet', (app, html, data) => {
    let width = game.settings.get(SHEETWIDTH_MODULENAME, SHEETWIDTH_JOURNALSETTINGS);
    
    html[0].style.width = width;
});
Hooks.on('renderActorSheet', (app, html, data) => {
    console.log(SHEETWIDTH_MODULENAME, data);
    let width;
    if(data.actor.type == 'npc') {
        width = game.settings.get(SHEETWIDTH_MODULENAME, SHEETWIDTH_NPCSETTINGS);
    }
    else {
        width = game.settings.get(SHEETWIDTH_MODULENAME, SHEETWIDTH_PCSETTINGS);
    }
    html[0].style.width = width;
});