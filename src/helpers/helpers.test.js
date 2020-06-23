import {slugify, unslugify, capitaliseWords, capitaliseAll, shadeColor, copyToClipboard } from './index.js'

test('Helpers slugify', () => {
  const text = 'Some example Text'
  const slugifiedText = slugify(text)
  expect(slugifiedText).toBe('some_example_text')
});

test('Helpers unslugify', () => {
  const text = 'some_example_text'
  const slugifiedText = unslugify(text)
  expect(slugifiedText).toBe('some example text')
});

test('Helpers capitaliseWords', () => {
  const text = 'some example text'
  const capitalisedText = capitaliseWords(text)
  expect(capitalisedText).toBe('Some Example Text')
});

test('Helpers capitaliseAll', () => {
  const text = 'some example text'
  const capitalisedText = capitaliseAll(text)
  expect(capitalisedText).toBe('SOME EXAMPLE TEXT')
});

test('Helpers shadeColor', () => {
  const color = '#FFFFFF'
  const darkerColor = shadeColor(color, -0.1)
  expect(darkerColor).toBe('#e6e6e6')
});