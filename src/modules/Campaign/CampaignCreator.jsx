import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Dropdown } from '~/components/common';
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
        {/* Offer */}
        <FormGroup>
          <Field>
            <Label title="Goal" required />
            <Input control={control} name="goal" placeholder="$0.00 USD" />
          </Field>
          <Field>
            <Label title="Raised Amount" required />
            <Input control={control} name="raised" placeholder="$0.00 USD" />
          </Field>
        </FormGroup>
        <FormGroup>
          <Field>
            <Label title="Amount Prefilled" />
            <Input control={control} name="prefilled" placeholder="Amount Prefilled" />
            <span className="text-sm text-text3">
              It will help fill amount box by click, place each amount by comma, ex:{' '}
              <strong>10,20,30,40</strong>
            </span>
          </Field>
          <Field>
            <Label title="Video" />
            <Input control={control} name="video" placeholder="Video" />
            <span className="text-sm text-text3">Place Youtube or Vimeo Video URL</span>
          </Field>
        </FormGroup>
        <FormGroup>
          <Field>
            <Label title="Campaign End Method" />
            <Dropdown>
              <Dropdown.Select placeholder="Select one"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Rewards</Dropdown.Option>
                <Dropdown.Option>Donation</Dropdown.Option>
                <Dropdown.Option>Debt</Dropdown.Option>
                <Dropdown.Option>Equity</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </Field>
          <Field>
            <Label title="Country" />
            <Dropdown>
              <Dropdown.Select placeholder="Select a country"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Vietnam</Dropdown.Option>
                <Dropdown.Option>Germany</Dropdown.Option>
                <Dropdown.Option>Singapore</Dropdown.Option>
                <Dropdown.Option>China</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </Field>
        </FormGroup>
        <FormGroup>
          <Field>
            <Label title="Start Date" />
            <Input control={control} name="startDate" placeholder="Start Date" />
          </Field>
          <Field>
            <Label title="End Date" />
            <Input control={control} name="endDate" placeholder="End Date" />
          </Field>
        </FormGroup>
        <Button buttonType="submit" isLoading={false} color="primary" className="mx-auto mt-10">
          Submit new campaign
        </Button>
      </form>
    </div>
  );
}

export default CampaignCreator;
