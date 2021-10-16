const location = window.location

if (location.protocol !== 'https:')
	location.replace(`https:${location.href.substring(location.protocol.length)}`)