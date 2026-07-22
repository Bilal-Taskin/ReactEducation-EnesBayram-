import React from "react";
import { useFormik } from "formik";
import { regiterFormSchemas } from "../schemas/RegisterFormSchemas";
import clsx from "clsx";

export default function () {
  const submit = (values, action) => {
    console.log(values);
    console.log(action);
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  //const {values, setValues} = UseState(); önceden böyle diyerek form elemanlarına values ile bağlanırdık. Şimdi formik kullanmınıda ise aşağıdaki gibi values içine tanımlanan initialvalues ile bağlanırız
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: regiterFormSchemas,
    //form submit edilince useFormikten destruct ettiğimiz handelSubmit tetikleniyor ve bizi kendi içindeki onSubmite yönlendiriyor ve biz de onu kendi yazdığımı submit fonksiyonumuza karşılarız.
    onSubmit: submit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="Emil giriniz"
            value={values.email}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Yaş</label>
          <input
            type="number"
            id="age"
            placeholder="Yaşınızı giriniz"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
          <label>Şifre</label>
          <input
            type="password"
            id="password"
            placeholder="Şifrenizi giriniz"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Şifre Tekrarı</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Şifrenizi tekrar giriniz"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <div>
          <label>Kullanıcı sözleşmesini kabul ediyorum</label>
          <input
            type="checkbox"
            id="term"
            value={values.term}
            onChange={handleChange}
          />
          {errors.term && <p>{errors.term}</p>}
        </div>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
}
<form>
  <label></label>Email
</form>;
