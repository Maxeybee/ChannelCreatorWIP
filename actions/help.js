module.exports = {
    name: "help",
    description: "delete all messages",
    execute(message, args, client) {
      let channel = message.channel.fetch();
      // let fetched;
      // do {
      //     fetched = message.channel.fetch({
      //         limit: 100
      //     });
      //     message.channel.bulkDelete(fetched);
      // }
      // while (fetched.size >= 2);
  
      return message.channel.send("delete messages ! => " + channel);
    },
  };
  