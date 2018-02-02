import {renderYearButton, getYearByBtn} from './year-button';

export function renderYearButtons(element, option, allYears, onYearSelect) {
  let divBtn = element.querySelector('.div-btn');
  divBtn.onclick = (evt) => onYearSelect(getYearByBtn(evt.target));

  if (!element.querySelector('.year-btn')) {
    allYears.forEach((year, i) =>
      divBtn.appendChild(renderYearButton(year))
    );
  }
}