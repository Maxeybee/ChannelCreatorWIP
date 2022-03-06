module.exports = {
  getUserFromMention: function (mention) {
    if (!mention) return;

    try {
      if (mention.startsWith("<@") && mention.endsWith(">")) {
        mention = mention.slice(2, -1);

        if (mention.startsWith("!")) {
          mention = mention.slice(1);
        }
        return mention;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
