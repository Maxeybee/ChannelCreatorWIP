const utils = require("../utils");

module.exports = {
  name: "move",
  description: "Move the specified users to a voice Channel",
  options: [
    {
      name: "name1",
      description: "1st name to be moved",
      require: true,
      type: 3,
    },
    {
      name: "name2",
      description: "2nd name to be moved",
      require: true,
      type: 3,
    },
  ],
  execute(message, args) {
    if (!args.length) {
      return message.channel.send(
        `You didn't provide any arguments, ${message.author}!`
      );
    } else {
      // Check if Category Channel exist =>
      let verifChannel = message.channel.guild.channels.cache.find(
        (channel) => channel.name.toLowerCase() === `salons temporaires`
      );
      if (!verifChannel) {
        // is channel == null
        try {
          message.guild.channels.create("SALONS TEMPORAIRES", {
            // Create a category channel + 1st temporary room
            type: "category",
            permissionOverwrites: [
              {
                //Set permission overwrites
                id: message.guild.id,
                allow: ["VIEW_CHANNEL"],
              },
            ],
          });
        } catch (catError) {
          console.log("Category channel error => " + catError);
        }

        try {
          message.guild.channels.create("Salon 01", {
            //Create a channel
            type: "voice",
            parent: verifChannel,
            permissionOverwrites: [
              {
                id: message.guild.id,
                allow: ["VIEW_CHANNEL", "SPEAK", "CONNECT"],
              },
            ],
          });
        } catch (roomError) {
          console.log("1st temporary room error => " + roomError);
        }

        // IF EXIST THEN CREATE VOICE CHANNEL ==>
      } else {
        console.log("Channel Already existing ! => " + verifChannel);

        // count the existing voice channel under .
        const voiceChannel = [];
        // message.guild.channels.forEach(channel => {
        //     if(channel.parent == )
        // });
        //Create New Random Channel
        message.guild.channels.create("Salon 0X", {
          //Create a channel
          type: "voice",
          parent: verifChannel,
          permissionOverwrites: [
            {
              id: message.guild.id,
              allow: ["VIEW_CHANNEL", "SPEAK", "CONNECT"],
            },
          ],
        });
      }
      /**Arguments handling (user args)  */
      args.forEach((element) => {
        // get user id formated
        let userId = utils.getUserFromMention(element);
        return message.channel.send("user from mention => " + userId + "\n");
      });
    }
  },
};
