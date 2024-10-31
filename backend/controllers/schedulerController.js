let events = [];
const addEvent = (req, res) => {
  const { start_time, end_time } = req.body;
  if (start_time >= end_time || start_time < 0 || end_time > 24) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid event times." });
  }

  for (let event of events) {
    if (start_time < event.end_time && end_time > event.start_time) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Event overlaps with an existing event.",
        });
    }
  }

  events.push({ start_time, end_time });
  res.status(201).json({ success: true, message: "Event added successfully." });
};

const getEvents = (req, res) => {
  res.json(events);
};

module.exports = { addEvent, getEvents };
