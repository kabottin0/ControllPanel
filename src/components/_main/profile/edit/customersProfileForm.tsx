import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import * as api from "src/services";
import * as Yup from "yup";
import _ from "lodash";
import {
  Stack,
  Button,
  Divider,
  Checkbox,
  TextField,
  DialogActions,
  FormControlLabel,
  Alert,
} from "@mui/material";
import { useFormik, Form, FormikProvider, Formik } from "formik";
import PhoneAutocomplete from "src/components/phoneAutocomplete";
import countries from "src/components/_main/checkout/countries.json";
import { LoadingButton } from "@mui/lab";
import { FormatLineSpacing } from "@mui/icons-material";





export default function CustomersProfileForm({ ...props }) {
  const { onClose, customers, apicall } = props;
  const [loading, setloading] = useState(false);
  const { t } = useTranslation("common");


  const { user } = useSelector(({ user }: { user: any }) => user);



  const NewCustomersSchema = Yup.object().shape({
    customerName: Yup.string().required("customerName is required"),
    bussinessName: Yup.string().required("bussinessName is required"),
    address: Yup.string().required("address is required"),
    email: Yup.string().required("email is required"),
    iva: Yup.string().required("State is required"),
    phone: Yup.number().required("Phone is required"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      customerName: customers ? customers.customerName : "",
      businessName: customers ? customers.businessName : "",
      address: customers ? customers.address : "",
      email: customers ? customers.email : "",
      phone: customers ? customers.phone : "",
      iva: customers ? customers.iva : "",
    },
    validationSchema: NewCustomersSchema,
    // onSubmit: async () => {
    //   setloading(true);
    //   try {
    //      await handleCreate();
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    onSubmit: () => { console.log('create customers') }
  });
  const { mutate: createMutate } = useMutation(["create"], api.createCustomers, {
    onSuccess: () => {
      setloading(false);
      toast.success(t("customers created"));
      formik.resetForm();
      onClose();
    },
    onError: () => setloading(false),
  });
  const {
    errors,
    values,
    touched,
    handleSubmit,
    getFieldProps,
    setFieldValue,
  } = formik;

  const handleCreate = async () => {
    const id = _.uniqueId();
    const data = {
      ...values,
      _id: id,
      user: user?._id,
    };
    await createMutate(data);
    apicall((prev: any) => ({ ...prev, apicall: !prev.apicall }));
  };

  const test = () => {
    console.log('click', formik.initialValues)
  }
  return (
    <>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={test}>

        {formikProps => (
          <>
            <Button onClick={formikProps.handleSubmit}>
              Submit
            </Button>
          </>
        )}
      </Formik>
    </>
  );
}