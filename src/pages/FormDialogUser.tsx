import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useContext, useState } from "react";
import { postLogin } from "../APIs/MovieRaterApi/postLogin";
import { createUser } from "../APIs/MovieRaterApi/postUser";
import { UserContext } from "../App";
import { NewUser } from "../types";

export default function FormDialogUser() {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [pseudo, setPseudo] = useState<null | string>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = async () => {
    const [user] = await postLogin(pseudo ?? "");
    console.log("user", user);
    if (user) setUser({ pseudo: user.pseudo, _id: user._id });
    setOpen(false);
  };

  const handlePseudoChange = (event: Event) => {
    setPseudo(event?.currentTarget?.value ?? "");
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        {user?.pseudo ? user.pseudo : "Sign In"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            console.log(formJson);
            createUser(formJson as NewUser);
            handleClose();
          },
        }}
      >
        <DialogTitle>Connect</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            onChange={handlePseudoChange}
            value={pseudo}
            type="string"
            fullWidth
            variant="standard"
          />
          <Button onClick={handleLogin}>Log in</Button>
        </DialogContent>
        <DialogTitle>Create your profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To vote for your favorite movie, please enter your pseudo, email
            address, date of birth here. We will not communicate this data to a
            another stakeholder.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="pseudo"
            name="pseudo"
            label="Pseudo"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="birthDate"
            name="dateOfBirth"
            label="Birth date"
            type="date"
            fullWidth
            placeholder="none"
            variant="standard"
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Create profile</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
