import * as repl from 'repl'
import * as db from './db'

// Return value of prepareConsole is used as global namespace for `yarn c`
export async function prepareConsole(): Promise<any> {
    const connection = await db.connect()

    const consoleVars: {[key: string]: any} = {
        db: db
    }

    // Expose all typeorm models
    for (const meta of connection.entityMetadatas) {
        consoleVars[meta.targetName] = meta.target
    }

    const r = repl.start({ prompt: 'owid> '})
    Object.assign(r.context, consoleVars)
}

prepareConsole()