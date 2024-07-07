import React, { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "react-apollo-hooks";
import useInput from "@am-hooks/use-input";
import AuthPresenter from "./AuthPresenter";
import {
  LOG_IN,
  LOCAL_LOG_IN,
  CREATE_ACCOUNT,
  REQUEST_SECRET,
} from "./AuthQueries";

export default () => {
  const [action, setAction] = useState("logIn");
  const userName = useInput("");
  const email = useInput("wam6577@gmail.com");
  const password = useInput("1234");
  const confirmPw = useInput("");
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);
  const [confirmPasswordMutation] = useMutation(LOG_IN, {
    variables: {
      email: email.value,
      password: password.value,
    },
  });
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      userName: userName.value,
      email: email.value,
      password: password.value,
    },
  });
  const [requestSecretMutation] = useMutation(REQUEST_SECRET, {
    variables: {
      email: email.value,
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "" && password.value !== "") {
        try {
          const {
            data: { confirmPassword: token },
          } = await confirmPasswordMutation();
          if (token !== "" && token !== undefined) {
            localLogInMutation({ variables: { token } });
          } else {
            throw Error();
          }
        } catch {
          toast.error("비밀번호를 다시 확인 해주세요.");
        }
      }
    } else if (action === "signUp") {
      if (
        userName.value !== "" &&
        email.value !== "" &&
        password.value !== "" &&
        confirmPw.value !== ""
      ) {
        if (password.value === confirmPw.value) {
          try {
            const {
              data: { createAccount },
            } = await createAccountMutation();
            if (!createAccount) {
              toast.error("계정을 만들 수 없습니다.");
            } else {
              toast.success("계정이 추가 되었습니다.");
              setTimeout(() => setAction("logIn"), 3000);
            }
          } catch (e) {
            if (e.message === "GraphQL error: 이미 존재하는 이름 입니다.") {
              toast.error("이미 존재하는 이름 입니다.");
            } else {
              toast.error("이미 존재하는 이메일 입니다.");
            }
          }
        } else {
          toast.error("비밀번호가 일치하지 않습니다.");
        }
      } else {
        toast.error("모두 작성 해주세요.");
      }
    } else if (action === "findPw") {
      if (email.value !== "") {
        try {
          const {
            data: { requestSecret },
          } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error("아직 계정이 없습니다. 계정을 만드십시오.");
            setTimeout(() => setAction("signUp"), 3000);
          } else {
            toast.success("받은 편지함에 임시 비밀번호를 확인하십시오");
            setAction("logIn");
          }
        } catch {
          toast.error("비밀을 요청할 수 없습니다. 다시 시도하십시오");
        }
      } else {
        toast.error("이메일을 적어주세요.");
      }
    }
  };

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      userName={userName}
      email={email}
      password={password}
      confirmPw={confirmPw}
      onSubmit={onSubmit}
    />
  );
};
