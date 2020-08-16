export const getListData = (value, elems) => {
  let listData = [];
  elems.forEach((elem) => {
    // console.log(elem);
    if (
      value.date() === +elem.day &&
      value.month() === +elem.month - 1 &&
      value.year() === +elem.year
    ) {
      listData = [
        ...listData,
        {
          type: "success",
          content: `Start Time : ${elem.startTime} `,
        },
        {
          type: "warning",
          content: `End Time : ${elem.endTime}`,
        },
      ];
    }
  });

  return listData || [];
};
