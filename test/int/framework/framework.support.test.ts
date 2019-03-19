import { BreakpointLocation } from '../intTestSupport';
import { loadProjectLabels } from '../labels';
import { expect } from 'chai';

suite('Test framework tests', () => {
    test('Should correctly find breakpoint labels in test source files', async () => {
        let labels = await loadProjectLabels('./testdata');
        let worldLabel = labels.get('WorldLabel');

        expect(worldLabel).to.eql(<BreakpointLocation>{ path: 'testdata\\labelTest.ts', line: 9 });
    });
});