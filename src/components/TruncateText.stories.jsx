import TruncateText, { DEFAULT_WIDTH } from './TruncateText';

export default {
  title: 'TruncateText',
  component: TruncateText,
};

const width = DEFAULT_WIDTH;

const Template = (args) => (
  <div
    style={{
      whiteSpace: 'pre-wrap',
      border: '1px dotted gray',
      width,
    }}
  >
    <TruncateText width={width} {...args} />
  </div>
);

const DUMMY_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// 1 Line - no truncation
export const NoTruncateOnSingleLine = Template.bind({});
NoTruncateOnSingleLine.args = {
  children: 'Lorem ipsum',
};

// Lots of lines - should truncate
export const TruncateOnOverflow = Template.bind({});
TruncateOnOverflow.args = {
  children: DUMMY_TEXT,
};

// Fits flush without truncation
const FITS_FLUSH_NO_TRUNCATE = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip!`;
export const FitsFlushNoTruncate = Template.bind({});
FitsFlushNoTruncate.args = {
  children: FITS_FLUSH_NO_TRUNCATE,
};

// Slightly over the limit
const SLIGHT_OVERFLOW = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex`;
export const SlightOverflow = Template.bind({});
SlightOverflow.args = {
  children: SLIGHT_OVERFLOW,
};

// Contains linebreak
const CONTAINS_LINEBREAK = `Lorem ipsum dolor sit amet, consectetur adipisicing

elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
`;
export const ContainsLinebreak = Template.bind({});
ContainsLinebreak.args = {
  children: CONTAINS_LINEBREAK,
};

// Truncated text ends with trailing newlines - should remove them
const TRAILING_NEWLINES = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 


labore et dolore magna aliqua ex ea commodo consequat. 
`;
export const TrailingNewlines = Template.bind({});
TrailingNewlines.args = {
  children: TRAILING_NEWLINES,
};

// Contains consecutive linebreaks
const CONSECUTIVE_LINEBREAKS = `Lorem ipsum dolor sit amet, consectetur adipisicing


elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ex ea commodo consequat. 
`;
export const ConsecutiveLinebreaks = Template.bind({});
ConsecutiveLinebreaks.args = {
  children: CONSECUTIVE_LINEBREAKS,
};
