const hideAll = () => {
    $('#profile').addClass('hide')
    $('#editProfile').addClass('hide')
    $('#progrss').addClass('hide')
    $('#back').addClass('hide')
}


const ShowProfile = () => {
    hideAll()
    $('#profile').toggleClass('hide')
    $('#back').addClass('hide')

}

const showEditProfile = () => {
    hideAll()
    $('#editProfile').toggleClass('hide')
    $('#back').removeClass('hide')
}

const ShowVideos = () => {
    hideAll()
    $('#progrss').toggleClass('hide')
    $('#back').removeClass('hide')
}

hideAll()
ShowProfile()