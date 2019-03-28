const UtilsServices = {
  sortList(objects) {
    const obj = objects.sort((a, b) => {
      const messageA = // get last message from a
        a.messages.length > 0
          ? JSON.parse(a.messages[a.messages.length - 1])
          : null;
      const messageB = // get last message from a
        b.messages.length > 0
          ? JSON.parse(b.messages[b.messages.length - 1])
          : null;

      // sort by message
      if (messageA && messageB) {
        if (messageA.read > messageB.read) {
          return 1;
        }
        if (messageA.read === messageB.read) {
          if (!messageA.read) {
            const dateA = new Date(messageA.date);
            const dateB = new Date(messageB.date);
            if (dateA.getTime() > dateB.getTime()) {
              return -1;
            }
            return 1;
          }
        }
        return -1;
      }
      // sort by linked
      if (a.linked > b.linked) {
        return 1;
      }
      if (a.linked === b.linked) {
        // sort by alphabetical order
        if (
          a.firstName.toLowerCase() + a.lastName.toLowerCase() >
          b.firstName.toLowerCase() + b.lastName.toLowerCase()
        ) {
          return 1;
        }
        return -1;
      }
      return 0;
    });
    return obj;
  },

  defineFilters(objects) {
    // adds the filter property in the list of patients
    const filteredObjects = objects;
    for (let i = 0; i < filteredObjects.length; i += 1) {
      let filter = 1;
      if (filteredObjects[i].linked) {
        filter *= 2;
      }
      if (filteredObjects[i].online) {
        filter *= 3;
      }
      const messagesLength = filteredObjects[i].messages.length;
      if (messagesLength > 0) {
        filter *= 5;
      }
      filteredObjects[i].filter = filter;
    }
    return filteredObjects;
  }
};

export default UtilsServices;
