// import React from 'react';
// import { describe, it } from 'mocha';
// import { expect } from 'chai';
// import { shallow } from 'enzyme';
// import ChatBot from '../../lib/ChatBot';
// import { TextStep, OptionsStep, CustomStep } from '../../lib/steps/steps';
//
// const CustomComponent = () => (
//   <div />
// );
//
// describe('ChatBot', () => {
//   const wrapper = shallow(
//     <ChatBot
//       className="classname-test"
//       botDelay={0}
//       userDelay={0}
//       customDelay={0}
//       handleEnd={() => {}}
//       steps={[
//         {
//           id: '1',
//           message: 'Hello World',
//           trigger: 'update',
//         },
//         {
//           id: 'update',
//           update: 'user',
//           trigger: '2',
//         },
//         {
//           id: '2',
//           component: <CustomComponent />,
//           trigger: '3',
//         },
//         {
//           id: '3',
//           component: <CustomComponent />,
//           asMessage: true,
//           trigger: '4',
//         },
//         {
//           id: '4',
//           component: <CustomComponent />,
//           trigger: '5',
//         },
//         {
//           id: '5',
//           options: [
//             { value: 'op1', label: 'Option 1', trigger: '6' },
//             { value: 'op2', label: 'Option 2', trigger: '6' },
//           ],
//         },
//         {
//           id: '6',
//           message: 'Bye!',
//           end: true,
//         },
//       ]}
//     />,
//   );
//
//   it('should render', () => {
//     expect(wrapper.hasClass('rsc')).to.be.equal(true);
//   });
//
//   it('should render with class \'classname-test\'', () => {
//     expect(wrapper.hasClass('classname-test')).to.be.equal(true);
//   });
//
//   it('should render a custom step', () => {
//     expect(wrapper.find(CustomStep)).to.have.length(1);
//   });
//
//   it('should render a options step', () => {
//     expect(wrapper.find(OptionsStep)).to.have.length(1);
//   });
//
//   it('should render 5 texts steps', () => {
//     wrapper.find('.rsc-os-option-element').first().simulate('click');
//     expect(wrapper.find(TextStep)).to.have.length(5);
//   });
// });
