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
				<div className='row d-flex justify-content-center align-items-center h-4/5 w-80 bg-slate-200'>
					<div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<h1>Chat</h1>
							<input
								className='block px-5 m-5 text-gray-700 bg-slate-50 sticky bottom-2'
								type='text'
								name='message'
								placeholder='Message here ...'
								{...register("message")}
							/>
							<button type='submit'></button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
