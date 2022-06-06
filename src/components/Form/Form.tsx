import { memo, VFC } from 'react';
import { Typography } from '@mui/material';
import { InputForm } from './InputForm';
import { Result } from './Result';

type Formulas = {
  id: number;
  title: string;
  item: Array<string>;
  calc: string;
  rate: boolean;
};

type Props = {
  item: Formulas;
  inputNumberArray: Array<number>;
  result: number;
  setInputNumberArray: React.Dispatch<React.SetStateAction<number[]>>;
  handleCalculate: (calc: string, inputNumberArray: any) => void;
};

export const Form: VFC<Props> = memo(
  ({ item, inputNumberArray, result, setInputNumberArray, handleCalculate }) => {
    return (
      <>
        <Typography variant="h6">{item['title']}</Typography>
        {item['item']?.map((item, index) => (
          <InputForm
            item={item}
            index={index}
            inputNumberArray={inputNumberArray}
            setInputNumberArray={setInputNumberArray}
          />
        ))}
        <Result
          item={item}
          inputNumberArray={inputNumberArray}
          handleCalculate={handleCalculate}
          result={result}
        />
      </>
    );
  }
);
