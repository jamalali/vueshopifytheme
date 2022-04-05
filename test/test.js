const chai = require('chai');
const async = require('async');
const expect = chai.expect;

chai.should();

const buildLibrary = require('../locales/src/build');

before(async function() {
  argv = {};
  argv.locale = 'en-GB';
  argv.noclean = false;
  argv.quiet = true;

  buildLibrary.setArgs(argv);

  themeLiquidFile = 'layout_original/theme.liquid';
  testJSONFile = 'locales/pl/Creatine/creatine-hero-2020.json';
  testLiquidFile = 'sections_original/creatine-hero-2020.liquid';

  // This has to be done here instead of on test #7 itself because callback & async/await can't mix inside Mocha individual tests.
  liquidFiles = await buildLibrary.getFileList();

  this.timeout(0);
});

describe('Liquid File handling', async function() {
  it(`#1 Target folder should be rimraf'ed - cleanTargetFolder()`, async function() {
    const result = await buildLibrary.cleanTargetFolder('layout/');
    return expect(result).to.equal(true);
  });

  it(`#2 Target folders should be cleaned (rimraf / rm-rf'ed). - cleanTargetFolders()`, async function() {
    const result = await buildLibrary.cleanTargetFolders();
    return expect(result).to.equal(true);
  });

  it('#3 Should return list of all files/folders in specific original prefix folders. - getFileList()', async function() {
    const result = await buildLibrary.getFileList();

    expect(result).to.be.an('array');
    expect(result).to.include(themeLiquidFile);
  });

});

describe('JSON File handling', async function() {
  it('#4 Should return location of JSON file from provided Liquid filename. - findJSONfile()', async function() {
    const result = await buildLibrary.findJSONfile(testLiquidFile);

    expect(result).to.be.a('string');
    expect(result).to.equal(testJSONFile);
  });

  it('#5 Should return contents of JSON file from provided filepath. - loadJSONFile()', async function() {
    const result = await buildLibrary.loadJSONFile(testJSONFile);

    expect(result).to.be.instanceof(Buffer);
    expect(JSON.parse(result)).to.be.a('object');
  });

  it('#6 Should return contents of JSON file and push into localeKeys instance var - loadJSONKeys()', async function() {
    const result = await buildLibrary.loadJSONKeys(testJSONFile);

    expect(result).to.equal(true);
    expect(buildLibrary.localeKeys).to.have.property('creatine-hero-2020.json');
  });
});

describe('Template Parsing', function() {
  it('#7 Should read through array of files and process lines looking for key calls - full iteration should complete with no errors. - readFileAndProcessLines()', function(done) {
    async.each(liquidFiles, buildLibrary.readFileAndProcessLines, (err) => {
      if(err) {
        done('Error processing Liquid files..');
      }
      done();
    });
    return;
  });

  it('#8 Should parse a line of text and return the new version of the line (Test 1 - Normal Line) - processLine()', async function() {
    var input = '               <div><p>Test line of HTML</p></div>';
    var newLine = await buildLibrary.processLine(input, testLiquidFile);
    newLine.should.equal(input);
  });

  it('#9 Should parse a line of text and return the new version of the line (Test 2 - Basic Key Call) - processLine()', async function(done) {
    this.timeout(0);
    await buildLibrary.injectKeys({
      'creatine-hero-2020.liquid': {
        'keycall': 'newvalue'
      }
    });
    var input = `               <div><p>Test line of HTML || 'creatine-hero-2020.keycall'|| </p></div>`;
    var output = `               <div><p>Test line of HTML newvalue </p></div>`;
    var newLine = await buildLibrary.processLine(input, testLiquidFile);
    newLine.should.equal(output);
    done();
  });
});
