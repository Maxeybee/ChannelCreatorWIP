// logs channel id
const logsChannel = '894948820725669969';

function startBOT(client) {
    //message.channel.send('Hi ! I am connected')
    client.channels.fetch(logsChannel)
    .then(channel => {
      channel.send(`Ready !`);
  })
}
module.exports = {
    startBOT
}