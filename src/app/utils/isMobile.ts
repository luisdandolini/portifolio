export
  function isMobile() {
    return (navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/Mobile/i)) || navigator.userAgent.match(/iPhone/i)
  }
