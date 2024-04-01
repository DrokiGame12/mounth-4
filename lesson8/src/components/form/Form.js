import React from 'react'
import { useForm } from 'react-hook-form'
import classes from './Form.module.sass'

const Form = () => {
    const {
        register,
        handleSubmit,
        // clearErrors,
        formState: { errors }
        // reset,
        // setValue,
        // watch
    } = useForm({
        defaultValues: {

        }
    })

    const submit = ( data ) => {
        // ПРОВЕРКА
        // const re = /^[A-Za-z0-9_]*?\.?[A-Za-z0-9_]*?@gmail\.com$/g
        // if( !re.test(data.email) ) return
        // if(data.password !== data.repassword) return

        console.log(data);
    }
    const error = ( data ) => {
        // console.log(data)
    }
    console.log();

    return (
        <div className={classes.form_page}>
            <div className={classes.form_block}>
                <h2>Register with</h2>
                <div className={classes.form_content}>
                    <form onSubmit={handleSubmit(submit, error)}>
                        <div className={classes.input}>
                            <span>Name</span>
                            <input
                                type='text'
                                placeholder='Your full name'
                                aria-invalid={!!errors?.name?.message}
                                {
                                    ...register('name', { required: 'Enter your name!' })
                                }
                            />
                            {!!errors?.name?.message && <p>{errors.name.message}</p>}
                        </div>

                        <div className={classes.input}>
                            <span>Email</span>
                            <input
                                type='text'
                                placeholder='Your email'
                                aria-invalid={!!errors?.email?.message}
                                {
                                    ...register('email', { required: 'Enter your email!' })
                                }
                            />
                            {!!errors?.email?.message && <p>{errors.email.message}</p>}
                        </div>

                        <div className={classes.input}>
                            <span>Password</span>
                            <input
                                type='text'
                                placeholder='Your password'
                                aria-invalid={!!errors?.password?.message}
                                // minLength={6}
                                {
                                    ...register('password', { required: 'Enter your password!' })
                                }
                            />
                            {!!errors?.password?.message && <p>{errors.password.message}</p>}
                        </div>

                        <div className={classes.input}>
                            <span>Re-enter password</span>
                            <input
                                type='text'
                                placeholder='Your password'
                                aria-invalid={!!errors?.repassword?.message}
                                {
                                    ...register('repassword', { required: 'Enter your password again!' })
                                }
                            />
                            {!!errors?.repassword?.message && <p>{errors.repassword.message}</p>}
                        </div>
                        <button>CONTINUE</button>
                    </form>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default Form