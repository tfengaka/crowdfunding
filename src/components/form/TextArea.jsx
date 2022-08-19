import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import { classNames } from '~/utils';

TextArea.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

function TextArea({ control, name, placeholder, ...rest }) {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <textarea
      id={name}
      name={name}
      className={classNames(
        'w-full py-4 px-6 text-base font-medium transition-all border-2 rounded-lg text-text1 placeholder:dark:text-text2 placeholder:text-text4 dark:bg-darkSecondary  dark:text-white dark:border-darkStroke resize-none outline-none min-h-36 overflow-y-auto'
      )}
      placeholder={placeholder}
      {...rest}
      {...field}
    />
  );
}

export default TextArea;
