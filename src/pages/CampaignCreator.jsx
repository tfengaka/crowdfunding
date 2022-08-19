import React from 'react';
import { useForm } from 'react-hook-form';
import { Dropdown } from '~/components/common';
import { Field, FormGroup, Input, Label, TextArea, TextEditor } from '~/components/form';

function CampaignCreator() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [story, setStory] = React.useState('');

  const onHandleCreateCampaign = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full px-16 py-10 bg-white rounded-xl shadow-lite dark:bg-darkSecondary dark:shadow-dark">
      <div className="mx-auto rounded-xl bg-text4 bg-opacity-10 max-w-[380px] text-center px-[59px] py-4 mb-10 dark:bg-darkStroke">
        <h3 className="text-2xl font-bold text-text2 dark:text-white">Start a Campaign 🚀</h3>
      </div>
      <form onSubmit={handleSubmit(onHandleCreateCampaign)}>
        <FormGroup>
          <Field>
            <Label title="Campaign Title" required htmlFor="title" />
            <Input
              control={control}
              name="title"
              type="text"
              placeholder="Write a title"
              error={errors.title?.message}
            />
          </Field>
          <Field>
            <Label title="Select a category" required />
            <Dropdown>
              <Dropdown.Select placeholder="Select a category"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Architecture</Dropdown.Option>
                <Dropdown.Option>Education</Dropdown.Option>
                <Dropdown.Option>Real Estate</Dropdown.Option>
                <Dropdown.Option>Film</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </Field>
        </FormGroup>
        <Field>
          <Label title="Short Description" required htmlFor="description" />
          <TextArea
            control={control}
            name="description"
            placeholder="Write a short description...."
          />
        </Field>
        <Field>
          <Label title="Story" required />
          <TextEditor value={story} placeholder="Write your story......" onChange={setStory} />
        </Field>
      </form>
    </div>
  );
}

export default CampaignCreator;
