import { Shapes } from "lucide-react";
import * as yup from "yup";
export const regiterFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli emailadresi giriniz")
    .required("zorunlu alan"),

  age: yup
    .number()
    .positive("pozitif bir değer giriniz")
    .integer("tamsayı giriniz")
    .required("Yaş aalanı zorunlu"),

  password: yup.string().required("zorunlu alan"),
  confirmPassword: yup
    .string()
    .required("şifre tekrarı zorunlu")
    .oneOf([yup.ref("password"), yup.password], "Şifereler eşleşmiyor"),

  term: yup.boolean().required("lütfen sözleşmeyi onaylayınız"),
});
