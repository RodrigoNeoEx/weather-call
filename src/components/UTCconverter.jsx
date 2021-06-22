export default function UTCconverter ({timezone}) {
  switch (timezone) {
    case -43200:
      return 'utc -12:00';
    case -39600:
      return 'utc -11:00';
    case -36000:
      return 'utc -10:00';
    case -34200:
      return 'utc -12:00';
    case -32400:
        return	'utc -09:00';
    case -28800:
        return 'utc	-08:00';
    case -25200:
        return 'utc	-07:00';
    case -21600:
        return 'utc -06:00';
    case -18000:
        return 'utc -05:00';
    case -16200:
      return 'utc -04:30';
    case -14400:
      return	'utc -04:00';
    case -12600:
      return	'utc -03:30';
    case -10800:
      return	'utc -03:00';
    case -7200:
      return	'utc -02:00';
    case -3600:
      return	'utc -01:00';
    case 3600:
      return	'utc +01:00';
    case 7200:
      return	'utc +02:00';
    case 10800:
      return	'utc +03:00';
    case 12600:
      return	'utc +03:30';
    case 14400:
      return	'utc +04:00';
    case 16200:
      return	'utc +04:30';
    case 18000:
      return	'utc +05:00';
    case 19800:
      return	'utc +05:30';
    case 20700:
      return	'utc +05:45';
    case 21600:
      return	'utc +06:00';
    case 23400:
      return	'utc +06:30';
    case 25200:
      return	'utc +07:00';
    case 28800:
      return	'utc +08:00';
    case 32400:
      return	'utc +09:00';
    case 34200:
      return	'utc +09:30';
    case 36000:
      return	'utc +10:00';
    case 37800:
      return 'utc +10:30';
    case 39600:
      return	'utc +11:00';
    case 41400:
      return	'utc +11:30';
    case 43200:
      return	'utc +12:00';
    case 45900:
      return	'utc +12:45';
    case 46800:
      return	'utc +13:00';
    case 50400:
      return	'utc +14:00';
    default:
        return 'utc	00:00';
  }
};




