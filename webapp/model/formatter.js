sap.ui.define([], function () {
  "use strict";

  return {
    delivery: function (iWeight, sMeasure) {
      var sResult = "";

      if (sMeasure === "G") {
        iWeight = iWeight / 1000;
      }
      if (iWeight < 0.5) {
        sResult = "Mail delivery";
      } else if (iWeight > 0.5 && iWeight < 5) {
        sResult = "Parcel delivery";
      } else {
        sResult = "Carrier delivery";
      }
      return sResult;
    },
  };
});
