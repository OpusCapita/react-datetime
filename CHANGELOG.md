# Changelog

* In general follow (https://docs.npmjs.com/getting-started/semantic-versioning) versioning.

## <next>

## 3.1.0
* Fixed an issue: Typing invalid value clears date input
* Added date prettifying on input blurring

## 3.0.1
* Added OpusCapita brand colors.

## 3.0.0
* Changed React version to 16.3. Fixed methods related to a new component lifecycle
* Fixed handling of empty value of 'value' property

## 2.2.4
* Bug fix: time handling fixes in handleDayClick function

## 2.2.3
* Bug fix: Github Issue #11 - Internet Explorer related style fixes

## 2.2.2
* Bug fix: Github Issue #9 - Overlaying calendar should fallback to window if parentElement container is scrollable.

## 2.2.1
* Fixed handling of disabled days. Now a user cannot choose a disabled day from a date picker.

## 2.2.0
* TimePicker is now also exported as an independent input control
* TimePicker new prop: minutesInterval
* Small bugfix - timepicker now allows to select 11 PM.

## 2.1.1
* DayPicker's first day of the week is now derived from locale

## 2.1.0
* Year/month select boxes to browse through month views in day picker

## 2.0.2
* Bug fix: state will now get updated upon external change

## 2.0.1
* Changed moment parsing from local time to UTC format

## 2.0.0
* Component will now automatically format the input value keeping the (model) value in props and using its own state to display the formatted visible value
* Some bug fixes and improvements
* Implemented first version of the time picker and date-time-input wrapper
* NOTE: Contains breaking changes

## 1.0.0
* Initial release
