import {
  Box,
  Card,
  Button,
  Typography,
  Stack,
  Paper,
  Dialog,
  Slide,
  useMediaQuery,
  Skeleton,
  useTheme,
  Grid
} from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CustomersProfileForm from "./customersProfileForm";
import { useState } from "react";


export default function customersProfile() {
  const { t } = useTranslation("customer info");
  const theme = useTheme();
  const [show, setShow] = useState(true)
  const [open, setOpen] = useState(true)

  return (
    <>
      <Card sx={{ p: 3 }}>
        <Stack spacing={3} alignItems="flex-start">
          <Typography variant="overline" sx={{ color: "text.secondary" }}>
          </Typography>
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <Stack direction='row' justifyContent={'space-between'}>
                  <Paper
                    sx={{
                      p: 2,
                      width: 1,
                      border: `1px solid ${theme.palette.background.default}`,
                    }}>
                    <Stack direction="row" justifyContent={'space-between'}>
                      <Stack direction="row" spacing={2}>
                        <Typography variant="subtitle1">
                          Nome Cliente:
                        </Typography>
                        <Typography variant="body1">
                          Nome cliente dal DB
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Typography variant="subtitle1">
                          Nome Azienda:
                        </Typography>
                        <Typography variant="body1">
                          Nome Azienda dal DB
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent={'space-between'} mt={2}>
                      <Stack direction="row" spacing={2}>
                        <Typography variant="subtitle1">
                          Address:
                        </Typography>
                        <Typography variant="body1">
                          Adrress cliente dal DB
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Typography variant="subtitle1">
                          Email:
                        </Typography>
                        <Typography variant="body1">
                          Email dal DB
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent={'space-between'} mt={2}>
                      <Stack direction="row" spacing={2}>
                        <Typography variant="subtitle1">
                          P.IVA:
                        </Typography>
                        <Typography variant="body1">
                          P.IVA dal DB
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Typography variant="subtitle1">
                          Phone:
                        </Typography>
                        <Typography variant="body1">
                          Phone dal DB
                        </Typography>
                      </Stack>
                    </Stack>
                  </Paper>
                </Stack>
              </Grid>
              <Grid item xs={2}>
                <Paper
                  sx={{
                    width: 1,
                    border: `1px solid ${theme.palette.background.default}`,
                  }}>
                  <Box sx={{ mt: 1 }}>
                    <Button
                      color="error"
                      size="small"
                      startIcon={<DeleteOutlineRoundedIcon />}
                      // onClick={handleClickOpen({
                      //   value: "delete",
                      //   id: customers._id,
                      // })}
                      onClick={() => { console.log('click delete') }}
                      sx={{ mr: 1 }}>
                        Delete
                    </Button>
                    <Button
                      size="small"
                      startIcon={<EditRoundedIcon />}
                      onClick={() => { console.log('click edit') }}>
                        Edit
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Stack>
      </Card>
      {show && show ? (
        <Dialog
          open={open}>
          <CustomersProfileForm />
        </Dialog>


      ) : null}
    </>
  )
}

