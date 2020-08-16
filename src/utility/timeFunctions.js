import moment from "moment-timezone";

export const timeFunctions = (logs, tz) => {
  const dateToday = moment().format("DD/M/YYYY");

  const timeFormat = "MMM D YYYY h:mmA";

  function convToIndTime(time) {
    return moment
      .tz(time, timeFormat, tz)
      .tz("Asia/Kolkata")
      .format(timeFormat);
  }

  const indTimeLogs = logs.map((log) => {
    return {
      ...log,
      start_time: convToIndTime(log.start_time),
      end_time: convToIndTime(log.end_time),
    };
  });

  function formatTime(time, toFormat) {
    return moment(time, timeFormat).format(toFormat);
  }

  const todayActivityLogs = indTimeLogs
    .filter(
      (log) =>
        formatTime(log.start_time, "DD/M/YYYY") === dateToday ||
        formatTime(log.start_time, "DD/M/YYYY") === dateToday
    )
    .map((log) => {
      return {
        Date: dateToday,
        startTime: formatTime(log.start_time, "h:mm A"),
        endTime: formatTime(log.end_time, "h:mm A"),
      };
    });

  const totalActivityLogs = indTimeLogs.map((log) => {
    return {
      year: formatTime(log.start_time, "YYYY"),
      month: formatTime(log.start_time, "M"),
      day: formatTime(log.start_time, "D"),
      startTime: formatTime(log.start_time, "h:mm A"),
      endTime: formatTime(log.end_time, "h:mm A"),
    };
  });

  return { todayActivityLogs, totalActivityLogs };
};

export default timeFunctions;
