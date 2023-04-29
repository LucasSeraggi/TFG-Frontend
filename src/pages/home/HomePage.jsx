import './HomePage.scss';

import React, { useState, useEffect } from "react";
import Card from '@mui/joy/Card';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import List from '@mui/joy/List';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import InputMask from 'react-input-mask';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import ptBR from 'date-fns/locale/pt-BR';
import { CssVarsProvider } from '@mui/joy/styles';
// import { bootstrapTheme } from '../../../layout/colorSchemes';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
      <div>
        <main>
        </main>
      </div>
  );
}

export default HomePage;
