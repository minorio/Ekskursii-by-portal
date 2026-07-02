import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";

//Datepicker

flatpickr.localize(Russian);

const pickerTo = flatpickr("#date-to", {
  dateFormat: "d.m.Y",
  minDate: "today",
  allowInput: true,
});

const pickerFrom = flatpickr("#date-from", {
  dateFormat: "d.m.Y",
  minDate: "today",
  allowInput: true,
  onChange(selectedDates) {
    if (selectedDates.length > 0) {
      pickerTo.set("minDate", selectedDates[0]);
    }
  },
});

const dateInputs = document.querySelectorAll("#date-from, #date-to");

dateInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 2 && value.length <= 4) {
      value = `${value.slice(0, 2)}.${value.slice(2)}`;
    } else if (value.length > 4) {
      value = `${value.slice(0, 2)}.${value.slice(2, 4)}.${value.slice(4, 8)}`;
    }

    e.target.value = value.slice(0, 10);

    if (e.target.value.length === 10) {
      const picker = e.target.id === "date-from" ? pickerFrom : pickerTo;
      picker.setDate(e.target.value, false, "d.m.Y");
    }
  });
});

const searchForm = document.querySelector("#search-form");
const cards = document.querySelectorAll(".schedule-card");
const emptyMessage = document.querySelector("#schedule-empty-message");

if (searchForm) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fromDate = pickerFrom.selectedDates[0];
    const toDate = pickerTo.selectedDates[0];

    if (!fromDate || !toDate) return;

    let hasResults = false;
    const fromTime = new Date(fromDate).setHours(0, 0, 0, 0);
    const toTime = new Date(toDate).setHours(0, 0, 0, 0);

    cards.forEach((card) => {
      const dateAttr = card.getAttribute("data-date");
      if (!dateAttr) return;

      const cardTime = new Date(dateAttr.replace(/-/g, "/")).setHours(
        0,
        0,
        0,
        0,
      );

      if (cardTime >= fromTime && cardTime <= toTime) {
        card.style.display = "";
        hasResults = true;
      } else {
        card.style.display = "none";
      }
    });

    if (emptyMessage) {
      emptyMessage.style.display = hasResults ? "none" : "block";
    }
  });
}
