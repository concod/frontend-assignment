import moment from "moment-timezone";

export const timeFunctions = (logs, tz) => {
  const dateToday = moment().format("DD/M/YYYY");

  const timeFormat = "MMM D YYYY h:mmA";

  // utility function to convert different Timezones to system Timezone
  function convToIndTime(time) {
    return moment
      .tz(time, timeFormat, tz)
      .tz("Asia/Kolkata")
      .format(timeFormat);
  }
  // Convert user json to sytem time zone
  const indTimeLogs = logs.map((log) => {
    return {
      ...log,
      start_time: convToIndTime(log.start_time),
      end_time: convToIndTime(log.end_time),
    };
  });

  // function to format time using moment
  function formatTime(time, toFormat) {
    return moment(time, timeFormat).format(toFormat);
  }

  // today's Activity logs
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

  // Total activity logs
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
