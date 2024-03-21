const ApiRoutes = {
    SIGN_IN:{
        path:'/user/login',
        authenticate:false
    },
    SIGN_UP:{
        path:'/user/createUser',
        authenticate:false
    },
    GET_USERS:{
        path:'/user',
        authenticate:true
    },
    SEND_EMAIL:{
        path:'/user/email-send',
        authenticate:true
    },
    VERIFY_CODE:{
        path:'/user/verify',
        authenticate:true
    },
     RESET_PASSWORD:{
        path:'/user/reset-password',
        authenticate:true
    }
}

export default ApiRoutes