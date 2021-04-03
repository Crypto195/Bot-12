const Discord = require('discord.js'),
    fetch = require('node-fetch')

module.exports = {
    name: 'members',
    description: 'Shows detailed information about members and join rate',
    usage: 'members',
    aliases: [],
    required: [],
    user: [],
    category: __dirname.split("commands\\")[1],

    premium: false,
    guildOnly: false,
    ignore: true,
    async execute(message, args, client, data) {

        const guildJoins = client.joins.ensure(message.guild.id, {
            "monday": 0,
            "tuesday": 0,
            "wednesday": 0,
            "thursday": 0,
            "friday": 0,
            "saturday": 0,
            "sunday": 0,
        })

        const chart = {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Joins',
                    data: Object.values(guildJoins)
                }]
            }
        }

        let enChart = encodeURIComponent(JSON.stringify(chart))
        const chartUrl = `https://quickchart.io/chart?c=${enChart}&backgroundColor=(rgb(47,%2049,%2054))`;
        message.channel.send(new Discord.MessageAttachment(chartUrl, "chart.png"))

        // Print the chart URL
    }
}