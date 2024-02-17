"use client";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
	.object()
	.shape({
		message: yup.string().required("message"),
	})
	.required();

export default function Discussion() {
	const [socket, setSocket] = useState(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	useEffect(() => {
		const socketInstance = io("http://localhost:3001");
		setSocket(socketInstance);

		// listen for events emitted by the server

		socketInstance.on("connect", () => {
			console.log("Connected to server");
		});

		socketInstance.on("message", (data) => {
			console.log(`Received message: ${data}`);
		});

		return () => {
			if (socketInstance) {
				socketInstance.disconnect();
			}
		};
	}, []);

	const onSubmit = (data) => {
		console.log("data", data);
		const message = data.message;
		if (socket && message) {
			socket.emit("message", message);
		}
	};

	return (
		<section className='vh-100'>
			<div className='container-fluid h-custom'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col-md-9 col-lg-6 col-xl-5'>
						<img
							src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
							className='img-fluid'
							alt='Sample image'
						/>
					</div>
					<div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
						<form onSubmit={handleSubmit(onSubmit)}>
							{/* Email input */}
							<div className='form-outline mb-4'>
								<label
									className='form-label'
									htmlFor='form3Example3'
								>
									Email address
								</label>
								<input
									id='message'
									className='form-control form-control-lg'
									placeholder='Enter message'
									{...register("message")}
								/>
							</div>
							<hr></hr>
							{errors.message?.message && (
								<p className='text-red-500'>{errors.username?.message}</p>
							)}

							<div className='text-center text-lg-start mt-4 pt-2'>
								<button
									type='submit'
									className='btn btn-primary btn-lg'
									style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
								>
									Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
