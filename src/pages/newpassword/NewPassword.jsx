import React, { Fragment } from 'react'
import NewPasswordForm from '../../components/NewPasswordForm/NewPasswordForm'
import ForgetText from '../../components/ui/ForgetText/ForgetText'

function NewPassword() {
    return (
        <Fragment>
            <ForgetText/>
            <NewPasswordForm/>
        </Fragment>
    )
}

export default NewPassword
