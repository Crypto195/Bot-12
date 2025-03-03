const Discord = require('discord.js'),
    ms = require('ms'),
    {
        inspect
    } = require('util')

module.exports = {
    name: 'eval',
    description: 'Evaluates a piece of code',
    usage: 'eval <code>',
    aliases: ['ev', 'evaluate'],
    required: [],
    user: [],
    category: __dirname.split("commands\\")[1],
    
    premium: false,
    guildOnly: false,
    async execute(message, args, client, data) {
        let evaled;
        let code = args.join(" ");
        try {
            const hrStart = process.hrtime();
            evaled = eval(code);

            if (evaled instanceof Promise) evaled = await evaled;
            const hrStop = process.hrtime(hrStart);

            let response = '';

            response += `\`\`\`js\n${await client.clean(evaled)}\n\`\`\`\n`;
            response += `• Discord.js ${Discord.version}\n`;
            response += ` • Type: \`${typeof evaled}\`\n`;
            response += ` • Time taken: \`${(((hrStop[0] * 1e9) + hrStop[1])) / 1e6}ms\``;

            if (response.length > 0) {
                return message.sendE("Success", response, client.colors.sky)
            }
        } catch (err) {
            return message.error(`Error: ${await client.clean(err.message)}`)
        }


    }
}