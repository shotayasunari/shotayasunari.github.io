 function openLink(url) {
        window.open(url, '_blank');
    }

    function openLinkAndScroll(url, sectionId) {
        location.href = `${url}#${sectionId}`;
    }
