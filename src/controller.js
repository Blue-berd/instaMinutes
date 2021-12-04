
var events = [];

const alertUser = async function (req, res) {
    try {
        for(let i = 0; i<events.length;i++){
            let text = events[i].text 
            currentTime = new Date().getTime();
            timedifference =  Date.parse(events[i].dateTime)-currentTime
            if(timedifference>0){
            console.log(timedifference)
            function alertUser() {
                console.log(text)
                res.send(text);
                events.splice(i,1)
            }
            setTimeout(alertUser, timedifference);
            }
    }
    } catch (error) {
      res.status(500).send({ status: false, message: error.message });
    }
  };
  
  const storeEvents = async function (req, res) {
    try {
      let text = req.body.text;
      let time = req.body.time;
      events.push({ text: text, dateTime: time });
  
       res.status(201).send("Success")
      
    } catch (error) {
      res.status(500).send({ status: false, message: error.message });
    }
  };

  module.exports = {
      storeEvents,
      alertUser
  }