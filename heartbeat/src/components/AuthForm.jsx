import React, { useState } from "react";
import { Button, TextField, Container, Typography, Box, FormControlLabel, Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import "../styles/styles.css";

function AuthForm({ setIsLoggedIn }) { 
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsLoggedIn(true); // Ahora esto debería funcionar porque 'setIsLoggedIn' es una prop
            navigate("/categories");
        } catch (error) {
            console.error("Login Error:", error);
            alert("Failed to login");
        }
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setIsLoggedIn(true); // Igual aquí, usa el prop correctamente
            navigate("/categories");
        } catch (error) {
            console.error("Registration Error:", error);
            alert("Failed to register");
        }
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <Container className="auth-form" component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    {isLogin ? "Iniciar Sesión" : "Registrar"}
                </Typography>
                <Box component="form" onSubmit={isLogin ? handleLogin : handleRegister} noValidate sx={{ mt: 1 }}>
                    {!isLogin && (
                        <>
                            <TextField
                    label="Correo electrónico"
                    type="email"
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Contraseña"
                    type="password"
                    fullWidth
                    margin="normal"
                    required
                />
                        </>
                    )}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Correo Electrónico"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Contraseña"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Switch checked={!isLogin} onChange={toggleMode} color="primary" />}
                        label={isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {isLogin ? "Iniciar Sesión" : "Registrar"}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default AuthForm;
